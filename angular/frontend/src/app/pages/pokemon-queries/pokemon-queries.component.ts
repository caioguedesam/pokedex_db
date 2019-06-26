import { Component, OnInit, OnChanges } from '@angular/core';
import { HighlightJS } from 'ngx-highlightjs';
import { WrapperService } from 'src/app/services/wrapper/wrapper.service';
import { ToastrService } from 'ngx-toastr';
// import * as $ from './textarea';

@Component({
  selector: 'app-pokemon-queries',
  templateUrl: './pokemon-queries.component.html',
  styleUrls: ['./pokemon-queries.component.scss']
})
export class PokemonQueriesComponent implements OnInit, OnChanges {

  public textareaContent = 'SELECT * FROM Pokemon WHERE nome ="Pikachu"';
  public formatedJson = null;

  constructor(
    private wrapperService: WrapperService,
    private highlightservice: HighlightJS,
    private toastr: ToastrService,
  ) { }

  public fullScreen(event: Event) {
    const el = document.getElementById('fullscreen');
    el.classList.toggle('active');
    const els = document.getElementsByClassName('editor-holder');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < els.length; i++) {
      els[i].classList.toggle('fullscreen');
    }
  }

  public escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  public async sendQuery(): Promise<void> {
    try  {
      const res = await this.wrapperService.getDbData(this.textareaContent);
      if (!Object.values(res).length) {
        this.formatedJson = null;
        // tslint:disable-next-line: no-string-throw
        throw('Empty response');
      }
      this.showJson(res);
      this.toastr.success('', 'Sucesso!');
    } catch (e) {
      this.toastr.error('Infelizmente sua consulta não retornou nenhum resultado', 'Resposta vazia');
    }
  }

  public hightlightSyntax() {
    const content = (document.getElementById('highlight-textarea') as HTMLTextAreaElement).value;
    const code = document.getElementById('code-container');
    const escaped = this.escapeHtml(content);
    if (!code) { return; }
    code.innerHTML = escaped;

    const els = document.getElementsByClassName('syntax-highight');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < els.length; i++) {
      this.highlightservice.highlightBlock(els[i] as HTMLElement);
    }
  }

  public syntaxHighlightJson(json) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }

  private showJson(serverResponse: any) {
    const strJson = JSON.stringify(serverResponse, undefined, 4);
    this.formatedJson = this.syntaxHighlightJson(strJson);

    const el = document.getElementById('query-result');
    if (!el) { return; }
    el.innerHTML = this.formatedJson;

    // document.body.appendChild(document.createElement('pre')).innerHTML = formatedJson;
    // parentElement.insertBefore(newElement, parentElement.children[2]);

  }

  ngOnInit() {
    this.hightlightSyntax();
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes): void {
    this.hightlightSyntax();
  }

}

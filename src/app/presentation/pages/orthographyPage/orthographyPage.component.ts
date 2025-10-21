import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { 
  ChatMessageComponent, 
  MyMessageComponent, 
  TextMessageBoxComponent, 
  TextMessageBoxEvent, 
  TextMessageBoxFileComponent, 
  TextMessageBoxSelectComponent, 
  TextMessageEvent, 
  TypingLoaderComponent
} from '@components';
import { Message } from '@interfaces';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-orthography-page',
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public messages = signal<Message[]>([{ text: 'Hola Mundo', isGpt: false }]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService);



  handleMessage(prompt: string) {

    console.log({ prompt });

  }

  handleMessageWithFile({ prompt, file }: TextMessageEvent) {

    console.log({ prompt, file });

  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log(event);
  }
}

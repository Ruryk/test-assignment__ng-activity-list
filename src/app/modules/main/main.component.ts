import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { ActivityListComponent } from '../../components/ui-blocks/activity-list/activity-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ActivityListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}

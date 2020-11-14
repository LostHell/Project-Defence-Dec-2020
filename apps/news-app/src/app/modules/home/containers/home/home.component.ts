import { Component } from '@angular/core';
import { NewsletterService } from '../../../../core/services/newsletter.service';
import { NewsletterCredentials } from '../../../shared/models/NewsletterCredentials';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public news = [
    {
      id: 1,
      imageUrl:
        'https://estaticos.elperiodico.com/resources/jpg/7/3/primer-ministro-bulgaro-boiko-borisov-1580313573237.jpg',
      title: 'Bat Boikoo i neshto si',
      conten:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив,' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 2,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81kEeV81nSL._AC_SL1500_.jpg',
      title: 'Suzuki Motorcycle',
      conten: 'Blq blq blq blq blq blq blq blq blq blq blq blq',
    },
    {
      id: 3,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81kEeV81nSL._AC_SL1500_.jpg',
      title: 'Suzuki Motorcycle',
      conten: 'Blq blq blq blq blq blq blq blq blq blq blq blq',
    },
    {
      id: 4,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81kEeV81nSL._AC_SL1500_.jpg',
      title: 'Suzuki Motorcycle',
      conten: 'Blq blq blq blq blq blq blq blq blq blq blq blq',
    },
    {
      id: 5,
      imageUrl:
        'https://estaticos.elperiodico.com/resources/jpg/7/3/primer-ministro-bulgaro-boiko-borisov-1580313573237.jpg',
      title: 'Bat Boikoo i neshto si',
      conten:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив,' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 6,
      imageUrl:
        'https://estaticos.elperiodico.com/resources/jpg/7/3/primer-ministro-bulgaro-boiko-borisov-1580313573237.jpg',
      title: 'Bat Boikoo i neshto si',
      conten:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив,' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
  ];

  form: FormGroup;

  showSuccessfullySubscribed = false;

  constructor(private newsletterService: NewsletterService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitNewsletterData(data: NewsletterCredentials) {
    this.newsletterService.subscribeToNewsletter(data).subscribe(() => {
      this.showSuccessfullySubscribed = true;
    });
  }
}

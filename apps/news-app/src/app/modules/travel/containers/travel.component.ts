import { Component } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent {
  public destinationsData = [
    {
      id: 1,
      imageUrl: 'https://www.asenovgrad.bg/uploads/posts/3ef9.jpg',
      title: 'Асенова крепост - България',
      content:
        'Крепостта е съществувала още по времето на траките, преустроена е от Византия през IX век, за да охранява\n' +
        'вратата на Беломорския проход и да осигури византийската граница в този край. Първите писмени сведения за\n' +
        'крепостта са от XI век и са получени от устава на тогава построения Бачковски манастир. От тези сведения се\n' +
        'вижда, че Асеновата крепост е притежавала собствена охрана и администрация. Превземана е от кръстоносците по\n' +
        'времето на Четвъртия кръстоносен поход. Крепостта съществува до 1410 г., разрушена е от нахлуващите османски\n' +
        'войски.',
    },
    {
      id: 2,
      imageUrl:
        'https://www.bundestag.de/resource/image/218498/16x9/1460/822/aae79d70c6a8c14508377a106a1bde03/Sn/westportal01.jpg',
      title: 'Райхстаг - Германия(Берлин)',
      content:
        'Днешният парламент на Германия се нарича Бундестаг. Райхстагът като институция датира от времето на Свещената\n' +
        'Римска империя и престава да действа като истински парламент по времето на Германската империя (1933-1945),\n' +
        'когато заседанията на Райхстага се състоят в сградата на Крол опера. В наши дни името „Райхстаг“ се отнася за\n' +
        'сградата, а „Бундестаг“ – за институцията.\n' +
        'При завземането на Берлин в края на Втората световна война съветските войски поставят съветско знаме на\n' +
        'покрива на Райхстага.',
    },
    {
      id: 3,
      imageUrl: 'https://www.asenovgrad.bg/uploads/posts/3ef9.jpg',
      title: 'Асенова крепост - България',
      content:
        'Крепостта е съществувала още по времето на траките, преустроена е от Византия през IX век, за да охранява\n' +
        'вратата на Беломорския проход и да осигури византийската граница в този край. Първите писмени сведения за\n' +
        'крепостта са от XI век и са получени от устава на тогава построения Бачковски манастир. От тези сведения се\n' +
        'вижда, че Асеновата крепост е притежавала собствена охрана и администрация. Превземана е от кръстоносците по\n' +
        'времето на Четвъртия кръстоносен поход. Крепостта съществува до 1410 г., разрушена е от нахлуващите османски\n' +
        'войски.',
    },
    {
      id: 4,
      imageUrl:
        'https://www.bundestag.de/resource/image/218498/16x9/1460/822/aae79d70c6a8c14508377a106a1bde03/Sn/westportal01.jpg',
      title: 'Райхстаг - Германия(Берлин)',
      content:
        'Днешният парламент на Германия се нарича Бундестаг. Райхстагът като институция датира от времето на Свещената\n' +
        'Римска империя и престава да действа като истински парламент по времето на Германската империя (1933-1945),\n' +
        'когато заседанията на Райхстага се състоят в сградата на Крол опера. В наши дни името „Райхстаг“ се отнася за\n' +
        'сградата, а „Бундестаг“ – за институцията.\n' +
        'При завземането на Берлин в края на Втората световна война съветските войски поставят съветско знаме на\n' +
        'покрива на Райхстага.',
    },
  ];
}
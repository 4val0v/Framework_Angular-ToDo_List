/** убираем тип данных, будто получаем ети данные из бд */
/*export const _BD = [
  {
    id: 0,
    title: '1 learning Angular CLI',
    completed : false,
    body: ' Angular CLI very cool '
  },
  {
    id: 1,
    title: '2 Angular CLI',
    completed : false,
    body: 'Lorem ipsum'
  },
  {
    id: 2,
    title: '3 Angular',
    completed : true,
    body: 'Lorem ipsum dolor'
  },
  {
    id: 3,
    title: '4 CLI',
    completed : true,
    body: 'Lorem ipsum dolor sit amet.'
  }
];*/

/** получаем данные через http */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const _BD = [
      {
        id: 0,
        title: '1 learning Angular CLI',
        completed : false,
        body: ' Angular CLI very cool '
      },
      {
        id: 1,
        title: '2 Angular CLI',
        completed : false,
        body: 'Lorem ipsum'
      },
      {
        id: 2,
        title: '3 Angular',
        completed : true,
        body: 'Lorem ipsum dolor'
      },
      {
        id: 3,
        title: '4 CLI',
        completed : true,
        body: 'Lorem ipsum dolor sit amet.'
      }
    ];
    return {_BD};
  }
}

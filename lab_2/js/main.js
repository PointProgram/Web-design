import model from './model/model.js';
import viewList from './view/viewList.js';
import controller from './controller/controller.js';

let Model = new model();

let ViewList = new viewList(Model);

let Controller = new controller(Model, ViewList);

Controller.addItem('Wolf', 'Вовк', '[/wʊlf/]]');
Controller.addItem('Template', 'Шаблон', '[/ˈtɛmpleɪt,ˈtɛmplət/]');
Controller.addItem('Existence', 'Існування', '[/ɪɡˈzɪst(ə)ns,ɛɡˈzɪst(ə)ns/]');
Controller.addItem('Life', 'Життя', '[/lʌɪf/]');
Controller.addItem('Value', 'Цінність', '[/lʌɪf/]');


Controller.initializeTable(Model.items);

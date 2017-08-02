import { join } from 'lodash';
// import printMe from './print.js';
// import test from './test.js';
import './style.css';

function component() {
  // setTimeout(function() {
    import(/* webpackChunkName: "test" */ './test.js').then(module => module.default(123));
  // }, 10000);

  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click here you motherfucker';
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print.js').then(module => module.default());

  element.appendChild(btn);
  return element;
}

let element = component();
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('accepting the updated print module');
//
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }

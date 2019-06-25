  import './styles.css';
  import $ from 'jquery';

  import {doSomeMath} from "./buttonscript.js";
  import {didSomeMath} from "./buttonscript.js";

  $(document).ready(function(){
    $(".button").click(function(){
      var x = doSomeMath(3,4);
      console.log(x);
      console.log(didSomeMath);
    })

  });

import Flicking from "@egjs/flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

  document.addEventListener("DOMContentLoaded", function() {

  
  const flicking = new Flicking("#carousel", {
    circular: true,
    horizontal: false
  });
  
  flicking.addPlugins(new AutoPlay());


});

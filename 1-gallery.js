import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as d}from"./assets/vendor-CgTBfC_f.js";const i="/goit-advancedjs-hw-01/assets/1-BhyK1eyi.jpg",e="/goit-advancedjs-hw-01/assets/2--zQ04kAB.jpg",a="/goit-advancedjs-hw-01/assets/3-DaBgdrPU.jpg",s="/goit-advancedjs-hw-01/assets/4-B8yHhXzG.jpg",o="/goit-advancedjs-hw-01/assets/5-mkZ6WQpZ.jpg",t="/goit-advancedjs-hw-01/assets/6-DzjiYAox.jpg",n="/goit-advancedjs-hw-01/assets/7-DjmPvC2g.jpg",r="/goit-advancedjs-hw-01/assets/8-BWH_mEsY.jpg",g="/goit-advancedjs-hw-01/assets/9-D_tWqsa2.jpg",m=[{preview:i,original:i,description:"Team workshop"},{preview:e,original:e,description:"Creative idea"},{preview:a,original:a,description:"Mobile design"},{preview:s,original:s,description:"Meeting room"},{preview:o,original:o,description:"Creative office"},{preview:t,original:t,description:"Open workspace"},{preview:n,original:n,description:"Coffee and laptop"},{preview:r,original:r,description:"Working at laptop"},{preview:g,original:g,description:"Team presentation"}],j=document.querySelector(".gallery"),v=m.map(({preview:p,original:c,description:l})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${c}">
        <img class="gallery-image" src="${p}" alt="${l}" />
      </a>
    </li>
  `).join("");j.insertAdjacentHTML("beforeend",v);new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map

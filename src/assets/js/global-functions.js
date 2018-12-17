import $ from 'jquery'
const GlobalFunctions = {
  cacheBody() {
    this.body = document.querySelector('body')
    return this.body
  },
  isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },
  postAjax(dataObj) {
    let ajaxOptions = {
      type: 'POST',
      url: myAjax.ajaxurl,
      data: dataObj,
      dataType: 'json',
      error(err) {
        console.log(err);
        return err
      }
    }
    return $.ajax(ajaxOptions)
  },
  calculateDots(itemsCount) {
    return itemsCount >= 6 ? 2 : 1
  },
  getAjax(url) {
    return $.get(url)
  },
  getUrlParam(sParameterName) {
    let urlString = window.location.href
    let url = new URL(urlString)
    let param = url.searchParams.getAll(sParameterName)
    return param.length > 0 ? param : 'url has no parameter by that name'
  },
  svgLibrary(key, svgClass = '') {
    let svgIcons = {
      winnersCursor: `<svg class="showLink ${svgClass}" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style="mix-blend-mode:multiply">
      <circle cx="35.5" cy="35.5" r="35.5" fill="#2F7E98"/>
      </g>
      <path d="M20.8687 33.132C20.1647 33.132 19.5561 32.956 19.0427 32.604C18.5367 32.2447 18.1774 31.757 17.9647 31.141L19.1857 30.69C19.3471 31.0493 19.5781 31.339 19.8787 31.559C20.1794 31.7717 20.5241 31.878 20.9127 31.878C21.3161 31.878 21.6351 31.7863 21.8697 31.603C22.1117 31.4197 22.2327 31.1557 22.2327 30.811C22.2327 30.6717 22.1997 30.5433 22.1337 30.426C22.0677 30.3013 21.9907 30.1987 21.9027 30.118C21.8221 30.0373 21.6974 29.9567 21.5287 29.876C21.3601 29.7953 21.2171 29.733 21.0997 29.689C20.9824 29.6377 20.8101 29.5753 20.5827 29.502C20.2894 29.3993 20.0621 29.3187 19.9007 29.26C19.7467 29.2013 19.5451 29.106 19.2957 28.974C19.0537 28.8347 18.8667 28.6953 18.7347 28.556C18.6101 28.4167 18.4964 28.2333 18.3937 28.006C18.2984 27.7713 18.2507 27.5147 18.2507 27.236C18.2507 26.6493 18.4781 26.158 18.9327 25.762C19.3874 25.366 20.0034 25.168 20.7807 25.168C21.4261 25.168 21.9614 25.322 22.3867 25.63C22.8121 25.9307 23.0981 26.3267 23.2447 26.818L22.0567 27.214C21.8221 26.686 21.3674 26.422 20.6927 26.422C20.3481 26.422 20.0767 26.4953 19.8787 26.642C19.6881 26.7813 19.5927 26.983 19.5927 27.247C19.5927 27.423 19.6661 27.5807 19.8127 27.72C19.9667 27.8593 20.1281 27.9657 20.2967 28.039C20.4727 28.105 20.7294 28.193 21.0667 28.303C21.2867 28.3837 21.4517 28.446 21.5617 28.49C21.6791 28.5267 21.8404 28.5927 22.0457 28.688C22.2511 28.7833 22.4124 28.8713 22.5297 28.952C22.6471 29.0253 22.7791 29.128 22.9257 29.26C23.0797 29.392 23.1971 29.5313 23.2777 29.678C23.3584 29.8173 23.4281 29.986 23.4867 30.184C23.5454 30.3747 23.5747 30.5837 23.5747 30.811C23.5747 31.5297 23.3181 32.098 22.8047 32.516C22.2987 32.9267 21.6534 33.132 20.8687 33.132ZM29.9036 33L27.8356 29.139L26.4386 30.844V33H25.1186V25.3H26.4386V28.996L29.3756 25.3H30.9156L28.7156 28.028L31.4436 33H29.9036ZM35.4286 33.132C34.9519 33.132 34.5193 33.055 34.1306 32.901C33.7419 32.747 33.4193 32.5417 33.1626 32.285C32.9133 32.021 32.7006 31.7167 32.5246 31.372C32.3559 31.0273 32.2349 30.6717 32.1616 30.305C32.0883 29.931 32.0516 29.546 32.0516 29.15C32.0516 28.754 32.0883 28.3727 32.1616 28.006C32.2349 27.632 32.3559 27.2727 32.5246 26.928C32.7006 26.5833 32.9133 26.2827 33.1626 26.026C33.4193 25.762 33.7419 25.553 34.1306 25.399C34.5193 25.245 34.9519 25.168 35.4286 25.168C36.0226 25.168 36.5433 25.2853 36.9906 25.52C37.4453 25.7473 37.7973 26.059 38.0466 26.455C38.3033 26.8437 38.4939 27.2653 38.6186 27.72C38.7433 28.1747 38.8056 28.6513 38.8056 29.15C38.8056 29.6487 38.7433 30.1253 38.6186 30.58C38.4939 31.0347 38.3033 31.46 38.0466 31.856C37.7973 32.2447 37.4453 32.5563 36.9906 32.791C36.5433 33.0183 36.0226 33.132 35.4286 33.132ZM35.4286 31.867C35.7806 31.867 36.0923 31.7827 36.3636 31.614C36.6349 31.4453 36.8439 31.2253 36.9906 30.954C37.1446 30.6753 37.2583 30.3857 37.3316 30.085C37.4049 29.777 37.4416 29.4653 37.4416 29.15C37.4416 28.8127 37.4049 28.4937 37.3316 28.193C37.2583 27.885 37.1446 27.5953 36.9906 27.324C36.8439 27.0527 36.6349 26.8363 36.3636 26.675C36.0996 26.5137 35.7879 26.433 35.4286 26.433C34.9593 26.433 34.5669 26.5833 34.2516 26.884C33.9363 27.1773 33.7163 27.5183 33.5916 27.907C33.4743 28.2957 33.4156 28.71 33.4156 29.15C33.4156 29.48 33.4523 29.799 33.5256 30.107C33.5989 30.415 33.7089 30.7047 33.8556 30.976C34.0096 31.2473 34.2186 31.4637 34.4826 31.625C34.7539 31.7863 35.0693 31.867 35.4286 31.867ZM40.4047 29.755H39.7117V28.534H40.4047V25.3H42.7807C43.3014 25.3 43.7744 25.3733 44.1997 25.52C44.6251 25.6667 44.9771 25.861 45.2557 26.103C45.5344 26.345 45.7654 26.6347 45.9487 26.972C46.1394 27.302 46.2751 27.6503 46.3557 28.017C46.4437 28.3763 46.4877 28.754 46.4877 29.15C46.4877 29.5167 46.4474 29.876 46.3667 30.228C46.2934 30.58 46.1614 30.9283 45.9707 31.273C45.7874 31.6103 45.5564 31.9073 45.2777 32.164C44.9991 32.4133 44.6397 32.615 44.1997 32.769C43.7671 32.923 43.2794 33 42.7367 33H40.4047V29.755ZM42.9237 31.757C43.3124 31.757 43.6534 31.68 43.9467 31.526C44.2474 31.372 44.4784 31.1667 44.6397 30.91C44.8084 30.646 44.9294 30.3673 45.0027 30.074C45.0834 29.7807 45.1237 29.4727 45.1237 29.15C45.1237 28.4313 44.9477 27.819 44.5957 27.313C44.2437 26.7997 43.7267 26.543 43.0447 26.543H41.7247V28.534H43.3417V29.755H41.7247V31.757H42.9237ZM52.7387 33L52.1337 31.317H49.0867L48.4817 33H47.0847L49.9557 25.3H51.2647L54.1247 33H52.7387ZM51.7157 30.129L50.8687 27.819C50.7587 27.5403 50.6744 27.28 50.6157 27.038C50.5571 27.2507 50.4727 27.511 50.3627 27.819L49.5047 30.129H51.7157ZM28.9982 46L26.3142 38.3H27.7332L29.4602 43.503C29.5555 43.833 29.6215 44.0677 29.6582 44.207C29.6875 44.053 29.7499 43.8183 29.8452 43.503L31.5612 38.3H32.9582L30.2852 46H28.9982ZM34.0185 46V38.3H39.0345V39.543H35.3385V41.402H37.6155V42.645H35.3385V44.757H39.2765V46H34.0185ZM40.7646 46V38.3H45.7366V39.543H42.0846V41.402H44.4166V42.645H42.0846V46H40.7646Z" fill="white"/>
      </svg>`,

      linkArrow: `<svg class="link-arrow ${svgClass}" width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="${svgClass}" fill-rule="evenodd" clip-rule="evenodd" d="M30.7216 6.63761L26.1705 11.0987L27.1352 12L32.8509 6.45094L33.3333 6.00027L32.8509 5.5496L27.1352 -2.53121e-07L26.1705 0.901333L30.7216 5.36293L9.33325 5.39199L9.33325 6.66667L30.7216 6.63761Z" fill="#15202D"/>
      <path class="link-arrow--orange" d="M0 5.33331L5.33333 5.36267V6.63735L0 6.60799V5.33331Z" fill="#FF8811"/></svg>`
    }
    return svgIcons[key]
  },

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  setTime(extraDays) {
    return extraDays * 24 * 60 * 60;
  },
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  addNegativeTabIndex(elementClass) {
    for (let i = 0; i < elementClass.length; i++) {
      elementClass[i].setAttribute('tabindex', '-1');
    }
  },
  addAriaLabel(elementClass, labelMessage) {
    for (let i = 0; i < elementClass.length; i++) {
      elementClass[i].setAttribute('aria-label', labelMessage)
    }
  }
}

module.exports = GlobalFunctions

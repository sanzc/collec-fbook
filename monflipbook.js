function monflipbook(n) {
    return {
      type: 'html',
      src: 'https://rawcdn.githack.com/sanzc/collec-fbook/e6b9c693ec8a5e218a28708083d408cd8ced431d/books/html/preview/1.html',
      interactive: true
    };
  }

  $('#heroflipbook').FlipBook({
    pageCallback: monflipbook,
    pages: 240,
    propertiesCallback: function(props) {
      //props.cover.color = 0x9C7D67;
      //props.cover.padding = 0.002;
      return props;
    },
    template: {
      html: 'https://rawcdn.githack.com/sanzc/collec-fbook/e6b9c693ec8a5e218a28708083d408cd8ced431d/templates/custom.html',
      styles: [
        'https://cdn.jsdelivr.net/npm/collec--fbook/css/black-book-view.min.css'
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/collec--fbook/css/font-awesome.min.css'
        }
      ],
      script: 'https://rawcdn.githack.com/sanzc/collec-fbook/27456143ebdeca5f840dea059263aaae382d3cfe/js/default-book-view.js',
    },
    ready: function(scene) {
              setTimeout(function() {
                scene.visual.getOrbit().actions.rotate(null, {dx: 0, dy: -25, state: 'move'});
              }, 10);
    }
  });
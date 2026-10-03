(function () {
  var WHATSAPP = '584249238355';
  var INSTAGRAM = 'https://www.instagram.com/jeannys2102/';
  var wa = function (msg) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg); };

  var CATS = [
    { id: 'buques', label: 'Buqués', desc: 'Rosas, girasoles y tulipanes de satín que duran para siempre.' },
    { id: 'personajes', label: 'Con personaje', desc: 'Su personaje favorito convertido en ramo.' },
    { id: 'el', label: 'Para él', desc: 'Carritos, fútbol y azul para sorprenderlo.' },
    { id: 'cajas', label: 'Cajas de regalo', desc: 'Rosas, dulces, fotos y detalles dentro de una caja.' },
    { id: 'recuerdos', label: 'Recuerdos', desc: 'Regalos con tus fotos para guardar siempre.' }
  ];
  var current = 'todos';
  var esc = function (t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; };
  var chatIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5z"></path></svg>';

  function renderFilters() {
    var list = [{ id: 'todos', label: 'Todos' }].concat(CATS);
    document.getElementById('filters').innerHTML = list.map(function (f, i) {
      var on = f.id === current;
      return '<button type="button" class="jl-btn jl-chip" data-filter="' + f.id + '" aria-pressed="' + on + '" style="flex-shrink:0;min-height:44px;padding:0 18px;border-radius:999px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;border:none;animation-delay:' + (i * 0.35).toFixed(2) + 's;' + (on ? 'background:#26333F;color:#FFFFFF' : 'background:#FFFFFF;color:#26333F') + '">' + f.label + '</button>';
    }).join('');
  }

  function card(p) {
    var price = p.price ? esc(p.price) : 'Consultar precio';
    var href = wa('¡Hola Jeanny! Me encantó «' + p.name + '» de tu catálogo. ¿Está disponible y cuál es el precio?');
    return '<article style="background:#FFFFFF;border-radius:22px;overflow:hidden;display:flex;flex-direction:column">' +
      '<div style="position:relative;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;padding:10px">' +
      '<img src="' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy" style="max-width:100%;max-height:100%;object-fit:contain;display:block">' +
      '<span style="position:absolute;top:10px;left:10px;padding:5px 10px;border-radius:999px;background:#DCEFFA;font-size:11px;font-weight:700">' + esc(p.tag) + '</span></div>' +
      '<div style="display:flex;flex-direction:column;gap:6px;padding:10px 12px 14px;flex-grow:1">' +
      '<h4 style="margin:0;font-family:Gloock,Georgia,serif;font-weight:400;font-size:20px;line-height:1.1">' + esc(p.name) + '</h4>' +
      '<p style="margin:0;font-size:13px;line-height:1.45">' + esc(p.desc) + '</p>' +
      '<span style="font-size:15px;font-weight:700">' + price + '</span>' +
      '<a href="' + href + '" target="_blank" rel="noopener" aria-label="Pedir ' + esc(p.name) + ' por WhatsApp" class="jl-btn" style="margin-top:auto;display:flex;align-items:center;justify-content:center;gap:8px;min-height:44px;border-radius:999px;background:#1C6DA8;color:#FFFFFF;font-weight:700;font-size:15px;text-decoration:none">' + chatIcon + '<span>Pedir</span></a>' +
      '</div></article>';
  }

  function renderGroups() {
    document.getElementById('groups').innerHTML = CATS.filter(function (c) { return current === 'todos' || c.id === current; }).map(function (c) {
      var items = PRODUCTOS.filter(function (p) { return p.cat === c.id; });
      return '<div id="cat-' + c.id + '" style="display:flex;flex-direction:column;gap:14px">' +
        '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;border-bottom:1.5px solid #26333F;padding-bottom:8px">' +
        '<h3 style="margin:0;font-family:Gloock,Georgia,serif;font-weight:400;font-size:28px;line-height:1.1">' + c.label + '</h3>' +
        '<span style="font-size:14px;font-weight:500;white-space:nowrap">' + items.length + (items.length === 1 ? ' diseño' : ' diseños') + '</span></div>' +
        '<p style="margin:0;font-size:15px;line-height:1.5">' + c.desc + '</p>' +
        '<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">' + items.map(card).join('') + '</div></div>';
    }).join('');
  }

  document.getElementById('filters').addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]');
    if (!b) return;
    current = b.getAttribute('data-filter');
    renderFilters(); renderGroups();
  });

  // Tarjeta QR
  var QR = {
    ig: { img: 'img/qr-ig.png', alt: 'Código QR del Instagram @jeannys2102', label: '@jeannys2102', hint: 'Escanéalo para seguirme en Instagram', href: INSTAGRAM, action: 'Abrir Instagram' },
    wa: { img: 'img/qr-wa.png', alt: 'Código QR del WhatsApp de Jeanny', label: '+58 424 923 8355', hint: 'Escanéalo para escribirme por WhatsApp', href: wa('¡Hola Jeanny! Vi tu tarjeta y quiero hacer un pedido.'), action: 'Abrir WhatsApp' }
  };
  var modal = document.getElementById('qr');
  var opener = document.getElementById('qr-open');
  function setTab(t) {
    var d = QR[t];
    document.getElementById('qr-img').src = d.img;
    document.getElementById('qr-img').alt = d.alt;
    document.getElementById('qr-label').textContent = d.label;
    document.getElementById('qr-hint').textContent = d.hint;
    var link = document.getElementById('qr-link');
    link.href = d.href; link.textContent = d.action;
    modal.querySelectorAll('.qr-tab').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-tab') === t)); });
  }
  function openQr() { setTab('ig'); modal.hidden = false; document.getElementById('qr-close').focus(); }
  function closeQr() { modal.hidden = true; opener.focus(); }
  opener.addEventListener('click', openQr);
  document.getElementById('qr-close').addEventListener('click', closeQr);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeQr();
    var t = e.target.closest('.qr-tab'); if (t) setTab(t.getAttribute('data-tab'));
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeQr(); });

  renderFilters(); renderGroups();
})();

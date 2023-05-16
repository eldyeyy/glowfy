const product = [
    {
        id: 0,
        image: '../pictures/a.png',
        title: 'Shalimar Parfum Inital',
        price: 120,
    },
    {
        id: 1,
        image: '../pictures/c.png',
        title: 'Eight & Bob',
        price: 195,
    },
    {
        id: 2,
        image: '../pictures/d.png',
        title: 'Belle Violette',
        price: 230,
    },
    {
        id: 3,
        image: '../pictures/f.png',
        title: 'Nina Ricci',
        price: 100,
    },

    {
        id: 4,
        image: '../pictures/k.png',
        title: 'Chanel N°5',
        price: 160,
    },

    {
        id: 5,
        image: '../pictures/i.png',
        title: 'Our Moment',
        price: 90,
    },

    {
        id: 6,
        image: '../pictures/l.png',
        title: 'Prada Rossetto',
        price: 180,
    },

    {
        id: 7,
        image: '../pictures/h.png',
        title: 'Charlie Revlon',
        price: 180,
    },

    {
        id: 8,
        image: '../pictures/r.png',
        title: 'Clinique Happy Heart',
        price: 90,
    },

    {
        id: 9,
        image: '../pictures/g.png',
        title: 'Burberry London',
        price: 90,
    },

    {
        id: 10,
        image: '../pictures/x.png',
        title: 'Red Door',
        price: 80,
    },

    {
        id: 11,
        image: '../pictures/y.png',
        title: 'White Shoulder',
        price: 70,
    },

    {
        id: 12,
        image: '../pictures/7.png',
        title: 'Sunflowers',
        price: 50,
    },

    {
        id: 13,
        image: '../pictures/8.png',
        title: 'Green Tea',
        price: 60,
    },
    {
        id: 14,
        image: '../pictures/9.png',
        title: 'Tommy Girl',
        price: 40,
    },
    {
        id: 15,
        image: '../pictures/10.png',
        title: 'Boucheron',
        price: 60,
    },
    {
        id: 16,
        image: '../pictures/11.png',
        title: 'Pleasures',
        price: 120,
    },

    {
        id: 17,
        image: '../pictures/12.png',
        title: 'Amarige',
        price: 160,
    },

    {
        id: 18,
        image: '../pictures/gg.png',
        title: 'Oscar',
        price: 70,
    },
    {
        id: 19,
        image: '../pictures/hh.png',
        title: 'Versace Woman',
        price: 70,
    },
    {
        id: 20,
        image: '../pictures/ii.png',
        title: 'Reb L Fleur',
        price: 70,
    },
    {
        id: 21,
        image: '../pictures/jj.png',
        title: 'Prada Candy',
        price: 100,
    },

    {
        id: 22,
        image: '../pictures/kk.png',
        title: 'Wind Song',
        price: 60,
    },

    {
        id: 23,
        image: '../pictures/ll.png',
        title: '4711',
        price: 50,
    },

    

     

];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  displaycart();
});

document.getElementById('root').innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>
          <button onclick='addtocart(${i++})'>Add to cart</button>
        </div>
      </div>
    `;
  })
  .join('');

function addtocart(a) {
  cart.push({ ...categories[a] });
  localStorage.setItem('cart', JSON.stringify(cart));
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
  } else {
    document.getElementById('cartItem').innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById('total').innerHTML = '$ ' + total + '.00';
        return `
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00</h2>
            <i class='fa fa-trash-o' onclick='delElement(${j++})'></i>
          </div>
        `;
      })
      .join('');
  }
}

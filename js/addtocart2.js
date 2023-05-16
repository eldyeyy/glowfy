const product = [
    {
        id: 0,
        image: '../pictures/e.png',
        title: 'Paco Robanne',
        price: 100,
    },
    {
        id: 1,
        image: '../pictures/j.png',
        title: 'Cool Water',
        price: 130,
    },
    {
        id: 2,
        image: '../pictures/m.png',
        title: 'Joop',
        price: 170,
    },
    {
        id: 3,
        image: '../pictures/n.png',
        title: 'Sauvage',
        price: 200,
    },

    {
        id: 4,
        image: '../pictures/o.png',
        title: 'The One',
        price: 80,
    },

    {
        id: 5,
        image: '../pictures/p.png',
        title: 'Obsession',
        price: 120,
    },

    {
        id: 6,
        image: '../pictures/q.png',
        title: 'Eternity',
        price: 160,
    },

    {
        id: 7,
        image: '../pictures/s.png',
        title: 'Club De Nuit',
        price: 160,
    },

    {
        id: 8,
        image: '../pictures/t.png',
        title: 'Paul Sebastian',
        price: 60,
    },

    {
        id: 9,
        image: '../pictures/u.png',
        title: 'Polo',
        price: 80,
    },

    {
        id: 10,
        image: '../pictures/v.png',
        title: 'Bentley Intense',
        price: 80,
    },

    {
        id: 11,
        image: '../pictures/w.png',
        title: 'Aspen',
        price: 70,
    },

    {
        id: 12,
        image: '../pictures/1.png',
        title: 'CK One',
        price: 60,
    },

    {
        id: 13,
        image: '../pictures/2.png',
        title: 'Nautica Voyage',
        price: 180,
    },
    {
        id: 14,
        image: '../pictures/3.png',
        title: 'Chrome',
        price: 80,
    },
    {
        id: 15,
        image: '../pictures/4.png',
        title: 'Hugo',
        price: 60,
    },
    {
        id: 16,
        image: '../pictures/5.png',
        title: 'Coach',
        price: 80,
    },

    {
        id: 17,
        image: '../pictures/6.png',
        title: 'Jimmy Choo Man',
        price: 100,
    },

    {
        id: 18,
        image: '../pictures/aa.png',
        title: 'Cuba Gold',
        price: 40,
    },
    {
        id: 19,
        image: '../pictures/bb.png',
        title: 'Polo Sport',
        price: 80,
    },
    {
        id: 20,
        image: '../pictures/cc.png',
        title: 'Jovan Musk',
        price: 50,
    },
    {
        id: 21,
        image: '../pictures/dd.png',
        title: 'Boss No.6',
        price: 60,
    },

    {
        id: 22,
        image: '../pictures/ee.png',
        title: 'Curve',
        price: 50,
    },

    {
        id: 23,
        image: '../pictures/ff.png',
        title: 'Gucci Guilty',
        price: 100,
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

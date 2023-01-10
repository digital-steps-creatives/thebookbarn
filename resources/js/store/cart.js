import swal from 'sweetalert2';
window.Swal = swal;
const getDefaultState = () => {
        return {
            cart:[]
        }
}
const state = getDefaultState()
const getters = {
        getCartItems(state) {
            return state.cart;
        },
        getTotalItem(state) {
            if (state.cart?.length > 99) {
              return '99+';
            } else {
              return state.cart?.length;
            }
        },
        getTotalPrice(state) {
            let total = 0;
        
            state.cart.forEach(item => {
              if (item.saleprice > '0') {
                total += item.saleprice * item.quantity;
              } else {
                total += item.price * item.quantity;
              }
        
            });
            return total;
        },
        getTotalDiscount(state) {
            return state.totalDiscount
          },
    getGrandTotal(state, getters) {
            return getters.getTotalPrice - state.totalDiscount;
    },
}
const actions = {
        addToCart(context, payload) {
            context.commit('ADD_TO_CART', payload);
            context.commit('SAVE_DATA', payload);
        },
        
        removeFromCart(context, payload) {
            context.commit('REMOVE_FROM_CART', payload);
            context.commit('SAVE_DATA', payload);
        },
        
        setCart(context) {
            context.commit('SET_CART');
        },
        
        resetCart(context) {
            context.commit('RESET_CART');
        }
}
const mutations ={
        ADD_TO_CART(state, item) {
            let selectedItem = state.cart.find(book => book.id == item.id);
            if (selectedItem) {
              selectedItem.quantity++
              Swal.fire({
                title: 'Quantity updated !',
                timer: 2000,
                icon: 'success',
                timerProgressBar: true,
                showConfirmButton: false,
              });
            } else {
              state.cart.push({
                ...item,
                quantity: 1
              });
              Swal.fire({
                title: item.name +' added to the list!',
                timer: 2000,
                icon: 'success',
                timerProgressBar: true,
                showConfirmButton: false,
              });
            }
        },
        SAVE_DATA(state) {
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        SET_CART(state) {
            state.cart = localStorage.getItem('cart') ?
              JSON.parse(localStorage.getItem('cart')) : [];
        },
        CART_ITEM_QUANTITY(state, payload) {
          console.log(payload.val.data);
            let selectedItem = state.cart.find(book => book.id == payload.item.id);
            selectedItem.quantity = payload.val.data;
            Swal.fire({
              title: 'Quantity updated !',
              timer: 2000,
              icon: 'success',
              timerProgressBar: true,
              showConfirmButton: false,
            });
            // console.log(selectedItem.quantity);
        },
        REMOVE_FROM_CART(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
        },
        RESET_CART(state) {
            localStorage.setItem('cart', []);
            state.cart = []
        }        
};
export default
 {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
 }
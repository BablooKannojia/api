import App from '././../App'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))


})
export default connect(mapStateToProps,mapDispatchToProps)(App)
// export default Home;
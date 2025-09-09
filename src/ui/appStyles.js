import { StyleSheet } from "react-native";
import AppColors from "./appColors";
import { screenHeight, screenWidth } from "./dimensions";

const AppStyles = StyleSheet.create({
    // Global styles
 container: {
     flex: 1,
     backgroundColor: AppColors.backgroundLight,
     padding: 10,
},
    centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    fontWeight:"bold",
    color: AppColors.error,
    textAlign: 'center',
    padding: 20,
  },
    reytyButton: {  
    backgroundColor: AppColors.primary,
    color: AppColors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: '500',
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    justifyContent: 'space-between',
  },
  rowAround: {
    justifyContent: 'space-around',
  },
  rowCenter: {
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  // Text styles
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: AppColors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.textSecondary,
    marginTop: 4,
  },

  // Header styles
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13,
    marginLeft: 5,
  },

  icon: {
    position: 'relative',
    marginRight: 10,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: AppColors.notificationDot,
    width: 15,
    height: 15,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: AppColors.white,
    fontWeight: 500,
  },

  // Banner styles
bannerCard: {
    backgroundColor: AppColors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 140,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginTop: 4,
  },
  bannerImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: 12,
  },
    // Product styles
    productsTop: {
        paddingHorizontal:20,
        paddingVertical:12,
    },
    productsTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: AppColors.textPrimary,
    },
    button: {
        fontSize: 16,
        color: AppColors.link,
        fontWeight: '500',
    },

    // Product Card styles
    productsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    productCard: {
        backgroundColor: AppColors.white,
        borderRadius: 20,
        padding: 12,
        marginHorizontal: 10,
        marginBottom: 20,
        width: 160,
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
        marginBottom: 12,
        resizeMode: 'cover',
    },
    favoriteIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: AppColors.primary,
        padding: 6,
        borderRadius: 20,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: AppColors.textPrimary,
        marginTop: 10,
    },
    productBrand: {
        fontSize: 12,
        color: AppColors.textSecondary,
        marginTop: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.primary,
        marginTop: 8,
    },

    // Product Detail styles
    detailHeader: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.lightGray,
        marginBottom: 10,
    },
    detailHeaderTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.textPrimary,
    },
    detailImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        
    },  
    detailCard: {
        backgroundColor: AppColors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20,
        marginTop: -20,
        shadowColor: AppColors.black,
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
        height: '100%',
    },
    detailButton: {
    },
    productTop: {
        paddingVertical: 15,
    },
    productDetailTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: AppColors.textPrimary,
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 10,
    },
    buttonsWrapper: {
        backgroundColor: AppColors.lightGray,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    quantity: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.textPrimary,
        marginHorizontal: 10,
    },
    star: {
        marginRight: 5,
    },
    ratingContanier: {
        marginBottom: 15,
    },
    raitingWrapper: {
   
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 15,
    },
    reviews: {
        fontSize: 15,
        fontWeight: '600',
        color: AppColors.textPrimary,
    },
    reviewsCount: {
        fontSize: 12,
        fontWeight: 'bold',
        color: AppColors.textSecondary,
        marginLeft: 4,
    },
    stock: {
        fontSize: 15,
        fontWeight: '600',
    },
    colorsWrapper: {
        marginBottom: 15,
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: AppColors.primary,
        marginRight: 10,
        borderWidth: 2,
        borderColor: AppColors.white,
    },
    productDescription: {
        fontSize: 14,
        color: AppColors.textSecondary,
        marginTop: 10,
        lineHeight: 20,
    },
    descriptionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: AppColors.textPrimary,
      marginBottom: 10,
  },
    descriptionText: {
      fontSize: 14,
      color: AppColors.textSecondary,
      lineHeight: 25,
  },
    productCart: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.link,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    productCartText: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.white,
        marginLeft: 10,
    },
    detailButton: {
       marginTop: 20,
       marginBottom: 30,
    },
      price: {
        fontSize:30,
        fontWeight: '700',
        color: AppColors.link,
    },
    productDetailPrice: {
        fontSize: 22,
        fontWeight: '700',
       
    },

    // Cart styles
    cartHeader: {
        paddingHorizontal: 15,
        paddingTop: 12,
    },
    cartHeaderTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: AppColors.textPrimary,
    },
    cartWrapper: {
        flex: 12,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    emptyWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: AppColors.textPrimary,
        marginBottom: 10,
    },
    emptyDescription: {
        fontSize: 16,
        color: AppColors.textSecondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    emptyButton: {
        backgroundColor: AppColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    emptyButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.white,
    },
    cartItem: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.lightGray,
        padding: 5,
        marginBottom: 15,
        marginTop: 5,
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
    },
    cartImg:{
        width: screenWidth * 0.2, 
        height: screenHeight * 0.1,
        borderRadius: 15,
        resizeMode: 'cover',
        flex: 1,
    },
    separator: {
       flex:1,
    },
   cartInfoContainer: {
        flex: 3,
        marginLeft: 10,
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    cartInfoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.textPrimary,
    },
    cartInfoCategory: {
        fontSize: 14,
        color: AppColors.white,
        fontWeight: '600',
        backgroundColor: AppColors.link,
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        marginTop: 4,
        marginBottom: 12,
    },
    trashBtn: {
        position: 'absolute',
        bottom: "50%",
        right: 10,
       
    },
    cartInfoDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartInfoQuantity: {
        fontSize: 14,
        color: AppColors.textPrimary,
    },
    cartInfoPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColors.black,
        marginTop: 10,
    },
    cartControls: {
        paddingVertical: screenHeight * 0.01,
        position: 'static',
    },
    btnContainer: {
        backgroundColor: AppColors.lightGray,
        marginRight: 'auto',
        gap: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    decreaseQuantity: {
        color: AppColors.black,
    
        
    },
    increaseQuantity: {
        color: AppColors.black,
       
        
    },
    textQuantityBtn: {
        fontSize: 16,
        fontWeight: '600',
        color: AppColors.white,
    },
    orderComplete: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: AppColors.lightGray,
    },
    checkoutBtn: {
        backgroundColor: AppColors.primary,
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    checkoutBtnText: {
        fontSize: 18,
        fontWeight: '600',
        color: AppColors.white,
    },
  
 
}); 
export default AppStyles;
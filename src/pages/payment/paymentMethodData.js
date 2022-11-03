import cardMethod from '../../assets/images/paymentPage/cardMethod.png'
import netBankingMethod from '../../assets/images/paymentPage/netBankingMethod.png'
import upiMethod from '../../assets/images/paymentPage/upiMethod.png'
import codMethod from '../../assets/images/paymentPage/codMethod.png'

export const paymentMethodData = [
    {
        icon: cardMethod,
        method: "Debit/Credit Card",
        value: "card",
    },
    {
        icon: netBankingMethod,
        method: "Net Banking",
        value: "netbanking",
    },
    {
        icon: upiMethod,
        method: "Google / UPI",
        value: "upi",
    },
    {
        icon: codMethod,
        method: "Cash on Delivery",
        value: "cod",
    },
]
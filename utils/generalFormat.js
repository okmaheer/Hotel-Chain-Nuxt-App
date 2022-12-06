export default (x) => {
    let dollarUSLocale = Intl.NumberFormat('PKR');
    return dollarUSLocale.format(x)

}
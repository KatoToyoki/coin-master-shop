import React, { useEffect, useState } from 'react';
import GetDatas from "./backend/databaseCtl/getData";

export function GetNotSoldItems() {
    /*
     * 回傳未被賣掉的商品陣列
     */
    let coinlist = GetDatas({ path: "items" })
    const [ansList, setAnsList] = useState([]);
    useEffect(() => {
        Object.entries(coinlist).map(
            ([key, value]) => {
                //console.log(value['sold'])
                Object.entries(value).map(
                    ([key1, value1]) => {
                        if (key1 == "sold" && value1 == false) {
                            setAnsList(value)

                        }

                    });
            }
        )

    })
    return ansList


}

export function GetItemOrFalse(item_id) {
    /*
     * 回傳商品json
     * 如果sold為true，則回傳False
     */
    let coinlist = GetDatas({ path: "items" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(coinlist).map(
            ([key, value]) => {
                if (value['item_id'] == item_id && value['sold'] == false) {
                    setAnsList(value)
                } else {
                    setAnsList(false)
                }
            }
        )
    })

    return ansList


}


function itemSold(item_id) {
    /*
     * 修改商品的sold成true
     */
}


function addItem(new_item) {
    //new_item為商品json
    /*
     * 在資料庫新增新的商品
     */
}


function addTrade(new_trade) {
    //new_item為交易json
    /*
     * 在資料庫新增新的交易流水
     */
}


function addToCart(customer_id, item_id) {
    /*
     * 把物品加入顧客的購物車
     *
     *
     *
     * */
}

function removeFromCart(customer_id, item_id) {
    /*
     * 把物品從顧客的購物車移除
     *
     * */
}


function getCart(customer_id) {
    /*
     * 回傳商品陣列
     *
     * */

}


function getCustomerCount() {
    /*
     * 回傳customer_count
     */
}
function customerCountAddOne() {
    /*
     * 把資料庫的customer_count加1
     */
}


function parseCookie() {
    let cookieObj = {};
    let cookieAry = document.cookie.split(';');
    for (let i = 0, l = cookieAry.length; i < l; ++i) {
        let cookie = cookieAry[i].trim().split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    return cookieObj;
}

function getCookieByName(name) {
    let value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

function getCustomerIdOrFalse() {
    let user = getCookieByName('user');
    if (user) {
        return user / 17;
    }
    else {
        return false;
    }
}


function newVisit() {
    if (getCustomerIdOrFalse() === false) {
        console.log("new visit");
        okYourAreNewVisitor();
    }
    else {
        console.log("not new visit");
    }
}


function okYourAreNewVisitor() {
    customerCountAddOne();
    document.cookie = 'user=' + encodeURIComponent(getCustomerCount() * 17);
}

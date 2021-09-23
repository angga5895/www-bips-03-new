function ceksizeB(type, hg){
    let nheight = hg === undefined ? window.innerHeight : hg
    if(nheight <= 646){
        switch (type) {
            //landing page
                case "portfolio": return "15"; break;
                case "fixedIncome": return "15"; break;
                case "mutualFund": return "12"; break;
                case "stockCash": return "9"; break;
                //Historical untuk semua
                case "historical": return "14"; break;
                //Fund Transfer
                case "fundTransferList": return "14"; break;
                // fund transfer cancel aggrid pertama
                case "cancel1": return "10"; break;
                case "cancel2": return "10"; break;

            //Market
                case "summary": return "15"; break;
                // sectoral atas
                case "sectoral": return "9"; break;
                // mencangkup semua top broker AgGrid
                case "topBroker": return "6"; break;
            
            //Broker
                case "brokerTradeSummary": return "16";break;
                case "brokerTradeHistory": return "15";break;

            //Stock
                case "corpAction": return "5"; break;
                case "stockWatchlist": return "18"; break;

                //mencangkup daily, broker dan foreign net
                case "stockTradeHistoryDaily": return "14"; break;

                //mencangkup semua AgGrid yang berjejer di kanan
                case "stockTradeHistoryMini": return "4"; break;

                case "stockTick": return "6"; break;
                case "rgTrade": return "12"; break;

                //mencangkup semua AgGrid mini yang berada di bawah stock tick
                case "stockTradeSummaryMini": return "5"; break;

            //TradeList
                case "orderList": return "10"; break;

                //mencangkup semua AgGrid mini yang berada di bawah ordder list
                case "orderListMini": return "5"; break;
                case "orderBookingList": return "18"; break;

                //mencangkup semua AgGrid pada adv list
                case "advList": return "15"; break;

                case "orderSetttingList": return "6"; break;
                case "sentOrderList": return "19"; break;

            //LiveTrade
                case "liveTrade": return "20"; break;
        }
    }
    else if(nheight > 647 && nheight <= 694){
        switch (type) {
            //landing page
            case "portfolio": return "15"; break;
            case "fixedIncome": return "15"; break;
            case "mutualFund": return "12"; break;
            case "stockCash": return "9"; break;
            //Historical untuk semua
            case "historical": return "14"; break;
            //Fund Transfer
            case "fundTransferList": return "14"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "6"; break;
            case "cancel2": return "6"; break;

            //Broker
            case "brokerTradeSummary": return "17";break;
            case "brokerTradeHistory": return "16";break;

            //Market
            case "summary": return "15"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "6"; break;


            //Stock
            case "corpAction": return "5"; break;
            case "stockWatchlist": return "18"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "14"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "4"; break;

            case "stockTick": return "6"; break;
            case "rgTrade": return "12"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "10"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "5"; break;
            case "orderBookingList": return "19"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "15"; break;

            case "orderSetttingList": return "6"; break;
            case "sentOrderList": return "19"; break;

            //LiveTrade
            case "liveTrade": return "20"; break;
        }
    }
    else if(nheight > 695 && nheight <= 722){
        switch (type) {
            //landing page
            case "portfolio": return "16"; break;
            case "fixedIncome": return "16"; break;
            case "mutualFund": return "13"; break;
            case "stockCash": return "10"; break;
            //Historical untuk semua
            case "historical": return "15"; break;
            //Fund Transfer
            case "fundTransferList": return "15"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "6"; break;
            case "cancel2": return "6"; break;

            //Broker
            case "brokerTradeSummary": return "17";break;
            case "brokerTradeHistory": return "16";break;

            //Market
            case "summary": return "16"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "7"; break;


            //Stock
            case "corpAction": return "5"; break;
            case "stockWatchlist": return "18"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "14"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "4"; break;

            case "stockTick": return "6"; break;
            case "rgTrade": return "12"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "11"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "6"; break;
            case "orderBookingList": return "21"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "17"; break;

            case "orderSetttingList": return "8"; break;
            case "sentOrderList": return "21"; break;

            //LiveTrade
            case "liveTrade": return "21"; break;
        }
    }
    else if(nheight > 723 && nheight <= 826){
        switch (type) {
            //landing page
            case "portfolio": return "18"; break;
            case "fixedIncome": return "18"; break;
            case "mutualFund": return "14"; break;
            case "stockCash": return "11"; break;
            //Historical untuk semua
            case "historical": return "17"; break;
            //Fund Transfer
            case "fundTransferList": return "17"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "6"; break;
            case "cancel2": return "6"; break;

            //Broker
            case "brokerTradeSummary": return "21";break;
            case "brokerTradeHistory": return "20";break;

            //Market
            case "summary": return "17"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "8"; break;


            //Stock
            case "corpAction": return "6"; break;
            case "stockWatchlist": return "20"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "15"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "5"; break;

            case "stockTick": return "7"; break;
            case "rgTrade": return "13"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "12"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "6"; break;
            case "orderBookingList": return "22"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "18"; break;

            case "orderSetttingList": return "9"; break;
            case "sentOrderList": return "22"; break;

            //LiveTrade
            case "liveTrade": return "22"; break;
        }
    }
    else if(nheight > 827 && nheight <= 886){
        switch (type) {
            //landing page
            case "portfolio": return "19"; break;
            case "fixedIncome": return "19"; break;
            case "mutualFund": return "15"; break;
            case "stockCash": return "12"; break;
            //Historical untuk semua
            case "historical": return "17"; break;
            //Fund Transfer
            case "fundTransferList": return "17"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "7"; break;
            case "cancel2": return "7"; break;

            //Broker
            case "brokerTradeSummary": return "23";break;
            case "brokerTradeHistory": return "22";break;

            //Market
            case "summary": return "18"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "8"; break;


            //Stock
            case "corpAction": return "6"; break;
            case "stockWatchlist": return "21"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "16"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "5"; break;

            case "stockTick": return "8"; break;
            case "rgTrade": return "14"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "13"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "6"; break;
            case "orderBookingList": return "23"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "19"; break;

            case "orderSetttingList": return "11"; break;
            case "sentOrderList": return "23"; break;

            //LiveTrade
            case "liveTrade": return "25"; break;
        }
    }
    else if(nheight > 887 && nheight <= 976){
        switch (type) {
            //landing page
            case "portfolio": return "21"; break;
            case "fixedIncome": return "21"; break;
            case "mutualFund": return "16"; break;
            case "stockCash": return "13"; break;
            //Historical untuk semua
            case "historical": return "19"; break;
            //Fund Transfer
            case "fundTransferList": return "19"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "8"; break;
            case "cancel2": return "8"; break;

            //Market
            case "summary": return "20"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "9"; break;

            //Broker
            case "brokerTradeSummary": return "27";break;
            case "brokerTradeHistory": return "26";break;

            //Stock
            case "corpAction": return "7"; break;
            case "stockWatchlist": return "23"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "18"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "6"; break;

            case "stockTick": return "11"; break;
            case "rgTrade": return "17"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "14"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "6"; break;
            case "orderBookingList": return "25"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "21"; break;

            case "orderSetttingList": return "13"; break;
            case "sentOrderList": return "25"; break;

            //LiveTrade
            case "liveTrade": return "27"; break;
        }
    }
    else if(nheight > 977 && nheight <= 1006){
        switch (type) {
            //landing page
            case "portfolio": return "23"; break;
            case "fixedIncome": return "23"; break;
            case "mutualFund": return "18"; break;
            case "stockCash": return "15"; break;
            //Historical untuk semua
            case "historical": return "21"; break;
            //Fund Transfer
            case "fundTransferList": return "21"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "9"; break;
            case "cancel2": return "9"; break;

            //Market
            case "summary": return "23"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "11"; break;

            //Broker
            case "brokerTradeSummary": return "28";break;
            case "brokerTradeHistory": return "27";break;

            //Stock
            case "corpAction": return "9"; break;
            case "stockWatchlist": return "29"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "24"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "8"; break;

            case "stockTick": return "16"; break;
            case "rgTrade": return "22"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "16"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "7"; break;
            case "orderBookingList": return "28"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "24"; break;

            case "orderSetttingList": return "17"; break;
            case "sentOrderList": return "28"; break;

            //LiveTrade
            case "liveTrade": return "30"; break;
        }
    }
    else if(nheight > 1007 && nheight <= 1126){
        switch (type) {
            //landing page
            case "portfolio": return "25"; break;
            case "fixedIncome": return "25"; break;
            case "mutualFund": return "19"; break;
            case "stockCash": return "16"; break;
            //Historical untuk semua
            case "historical": return "23"; break;
            //Fund Transfer
            case "fundTransferList": return "23"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "10"; break;
            case "cancel2": return "10"; break;

            //Market
            case "summary": return "24"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "11"; break;

            //Broker
            case "brokerTradeSummary": return "32";break;
            case "brokerTradeHistory": return "31";break;

            //Stock
            case "corpAction": return "9"; break;
            case "stockWatchlist": return "30"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "25"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "8"; break;

            case "stockTick": return "17"; break;
            case "rgTrade": return "23"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "17"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "8"; break;
            case "orderBookingList": return "29"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "25"; break;

            case "orderSetttingList": return "18"; break;
            case "sentOrderList": return "29"; break;

            //LiveTrade
            case "liveTrade": return "32"; break;
        }
    }
    else if(nheight > 1127 && nheight < 1526){
        switch (type) {
            //landing page
            case "portfolio": return "28"; break;
            case "fixedIncome": return "28"; break;
            case "mutualFund": return "22"; break;
            case "stockCash": return "18"; break;
            //Historical untuk semua
            case "historical": return "26"; break;
            //Fund Transfer
            case "fundTransferList": return "26"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "13"; break;
            case "cancel2": return "13"; break;

            //Market
            case "summary": return "28"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "13"; break;

            //Broker
            case "brokerTradeSummary": return "46";break;
            case "brokerTradeHistory": return "45";break;

            //Stock
            case "corpAction": return "16"; break;
            case "stockWatchlist": return "46"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "44"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "15"; break;

            case "stockTick": return "33"; break;
            case "rgTrade": return "39"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "19"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "9"; break;
            case "orderBookingList": return "34"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "30"; break;

            case "orderSetttingList": return "22"; break;
            case "sentOrderList": return "34"; break;

            //LiveTrade
            case "liveTrade": return "36"; break;
        }
    }
    else if(nheight > 1527 && nheight < 1974){
        switch (type) {
            //landing page
            case "portfolio": return "41"; break;
            case "fixedIncome": return "41"; break;
            case "mutualFund": return "32"; break;
            case "stockCash": return "27"; break;
            //Historical untuk semua
            case "historical": return "39"; break;
            //Fund Transfer
            case "fundTransferList": return "39"; break;
            // fund transfer cancel aggrid pertama
            case "cancel1": return "20"; break;
            case "cancel2": return "20"; break;

            //Market
            case "summary": return "41"; break;
            // sectoral atas
            case "sectoral": return "9"; break;
            // mencangkup semua top broker AgGrid
            case "topBroker": return "18"; break;

            //Broker
            case "brokerTradeSummary": return "62";break;
            case "brokerTradeHistory": return "61";break;

            //Stock
            case "corpAction": return "23"; break;
            case "stockWatchlist": return "65"; break;

            //mencangkup daily, broker dan foreign net
            case "stockTradeHistoryDaily": return "60"; break;

            //mencangkup semua AgGrid yang berjejer di kanan
            case "stockTradeHistoryMini": return "22"; break;

            case "stockTick": return "47"; break;
            case "rgTrade": return "53"; break;

            //mencangkup semua AgGrid mini yang berada di bawah stock tick
            case "stockTradeSummaryMini": return "5"; break;

            //TradeList
            case "orderList": return "28"; break;

            //mencangkup semua AgGrid mini yang berada di bawah ordder list
            case "orderListMini": return "13"; break;
            case "orderBookingList": return "48"; break;

            //mencangkup semua AgGrid pada adv list
            case "advList": return "44"; break;

            case "orderSetttingList": return "34"; break;
            case "sentOrderList": return "48"; break;

            //LiveTrade
            case "liveTrade": return "52"; break;
        }
    }
    else{
        switch (type) {
            //landing page
                case "portfolio": return "56"; break;
                case "fixedIncome": return "56"; break;
                case "mutualFund": return "44"; break;
                case "stockCash": return "36"; break;
                //Historical untuk semua
                case "historical": return "54"; break;
                //Fund Transfer
                case "fundTransferList": return "54"; break;
                //fund transfer cancel aggrid pertama
                case "cancel1": return "28"; break;
                case "cancel2": return "28"; break;

            //Market
                case "summary": return "54"; break;
                // sectoral atas
                case "sectoral": return "9"; break;
                // mencangkup semua top broker AgGrid
                case "topBroker": return "25"; break;

            //Broker
            case "brokerTradeSummary": return "67";break;
            case "brokerTradeHistory": return "66";break;

            //Stock
                case "corpAction": return "23"; break;
                case "stockWatchlist": return "65"; break;
                //mencangkup daily, broker dan foreign net
                case "stockTradeHistoryDaily": return "60"; break;
                //mencangkup semua AgGrid yang berjejer di kanan
                case "stockTradeHistoryMini": return "22"; break;
                case "stockTick": return "47"; break;
                case "rgTrade": return "54"; break;
                //mencangkup semua AgGrid mini yang berada di bawah stock tick
                case "stockTradeSummaryMini": return "5"; break;

            //TradeList
                case "orderList": return "37"; break;

                //mencangkup semua AgGrid mini yang berada di bawah ordder list
                case "orderListMini": return "18"; break;
                case "orderBookingList": return "65"; break;

                //mencangkup semua AgGrid pada adv list
                case "advList": return "61"; break;

                case "orderSetttingList": return "53"; break;
                case "sentOrderList": return "65"; break;

            //LiveTrade
                case "liveTrade": return "69"; break;
        }
    }
}

function GetInitialRow(nor, formatData, data){
    let dif = nor - data.length
    if(dif >= 1){
        for(let j=0; j<dif; j++){
            data.push(formatData)
        }
    }
    return data
}

export { ceksizeB, GetInitialRow }
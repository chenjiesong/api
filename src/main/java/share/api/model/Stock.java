package share.api.model;

import org.springframework.stereotype.Component;

@Component
public class Stock {
    private String symbol;
    private String code;
    private String name;
    private String date;
    private String time;
    private double open;
    private double close;
    private double price;
    private double high;
    private double changepercent;
    private double low;
    private double volume;
    private double turnover;
    private double buy1;
    private double buy1_hand;
    private double sell1;
    private double sell1_hand;
    private double buy2;
    private double buy2_hand;
    private double buy3;
    private double buy3_hand;
    private double buy4;
    private double buy4_hand;
    private double buy5;
    private double buy5_hand;
    private double sell2;
    private double sell2_hand;
    private double sell3;
    private double sell3_hand;
    private double sell4;
    private double sell4_hand;
    private double sell5;
    private double sell5_hand;

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getOpen() {
        return open;
    }

    public void setOpen(double open) {
        this.open = open;
    }

    public double getClose() {
        return close;
    }

    public void setClose(double close) {
        this.close = close;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getHigh() {
        return high;
    }

    public void setHigh(double high) {
        this.high = high;
    }

    public double getChangepercent() {
        return changepercent;
    }

    public void setChangepercent(double changepercent) {
        this.changepercent = changepercent;
    }

    public double getLow() {
        return low;
    }

    public void setLow(double low) {
        this.low = low;
    }

    public double getVolume() {
        return volume;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

    public double getTurnover() {
        return turnover;
    }

    public void setTurnover(double turnover) {
        this.turnover = turnover;
    }

    public double getBuy1() {
        return buy1;
    }

    public void setBuy1(double buy1) {
        this.buy1 = buy1;
    }

    public double getBuy1_hand() {
        return buy1_hand;
    }

    public void setBuy1_hand(double buy1_hand) {
        this.buy1_hand = buy1_hand;
    }

    public double getBuy2() {
        return buy2;
    }

    public void setBuy2(double buy2) {
        this.buy2 = buy2;
    }

    public double getBuy2_hand() {
        return buy2_hand;
    }

    public void setBuy2_hand(double buy2_hand) {
        this.buy2_hand = buy2_hand;
    }

    public double getBuy3() {
        return buy3;
    }

    public void setBuy3(double buy3) {
        this.buy3 = buy3;
    }

    public double getBuy3_hand() {
        return buy3_hand;
    }

    public void setBuy3_hand(double buy3_hand) {
        this.buy3_hand = buy3_hand;
    }

    public double getBuy4() {
        return buy4;
    }

    public void setBuy4(double buy4) {
        this.buy4 = buy4;
    }

    public double getBuy4_hand() {
        return buy4_hand;
    }

    public void setBuy4_hand(double buy4_hand) {
        this.buy4_hand = buy4_hand;
    }

    public double getBuy5() {
        return buy5;
    }

    public void setBuy5(double buy5) {
        this.buy5 = buy5;
    }

    public double getBuy5_hand() {
        return buy5_hand;
    }

    public void setBuy5_hand(double buy5_hand) {
        this.buy5_hand = buy5_hand;
    }

    public double getSell1() {
        return sell1;
    }

    public void setSell1(double sell1) {
        this.sell1 = sell1;
    }

    public double getSell1_hand() {
        return sell1_hand;
    }

    public void setSell1_hand(double sell1_hand) {
        this.sell1_hand = sell1_hand;
    }

    public double getSell2() {
        return sell2;
    }

    public void setSell2(double sell2) {
        this.sell2 = sell2;
    }

    public double getSell2_hand() {
        return sell2_hand;
    }

    public void setSell2_hand(double sell2_hand) {
        this.sell2_hand = sell2_hand;
    }

    public double getSell3() {
        return sell3;
    }

    public void setSell3(double sell3) {
        this.sell3 = sell3;
    }

    public double getSell3_hand() {
        return sell3_hand;
    }

    public void setSell3_hand(double sell3_hand) {
        this.sell3_hand = sell3_hand;
    }

    public double getSell4() {
        return sell4;
    }

    public void setSell4(double sell4) {
        this.sell4 = sell4;
    }

    public double getSell4_hand() {
        return sell4_hand;
    }

    public void setSell4_hand(double sell4_hand) {
        this.sell4_hand = sell4_hand;
    }

    public double getSell5() {
        return sell5;
    }

    public void setSell5(double sell5) {
        this.sell5 = sell5;
    }

    public double getSell5_hand() {
        return sell5_hand;
    }

    public void setSell5_hand(double sell5_hand) {
        this.sell5_hand = sell5_hand;
    }

    @Override
    public String toString(){
        return  "Stock_Real{" +
                "symbol='" + symbol + '\'' +
                ",code='" + code +'\''+
                ",name='" + name +'\''+
                ",date='" + date +'\''+
                ",time='" + time +'\''+
                ",open='" + open +'\''+
                ",close='" + close +'\''+
                '}';
    }
}

package share.api.model;

public class UserStock {
    private Integer uid;
    private String symbol;

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    @Override
    public String toString(){
        return  "User{" +
                "id='" + uid + '\'' +
                ",symbol='" + symbol +'\''+
                '}';
    }

}

package share.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import share.api.model.Stock;
import share.api.model.StockReal;
import share.api.model.User;
import share.api.model.UserStock;

import java.util.List;

@Mapper
public interface StockMapper {
    List<UserStock>  queryUserStockByUid(Integer uid);
    Integer  queryCountUserStockByUid(Integer uid);
    List<StockReal> queryStockTop();
    List<StockReal> queryStockBot();
    List<StockReal> queryStockPb();
    List<StockReal> queryStockTurnover();
    List<StockReal> queryStockVolume();
    List<StockReal> queryStockByCode(String code);
    List<StockReal> queryStockByName(String name);
}


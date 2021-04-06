package share.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import share.api.model.User;
import share.api.model.UserRecent;

import java.util.List;

@Mapper
public interface UserMapper {
    User queryUserByUid(Integer uid);
    User queryUserByUserName(String username);
    List<UserRecent> queryUserRecent(int uid);
}


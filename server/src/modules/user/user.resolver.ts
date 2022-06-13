import { Query, Resolver } from "type-graphql";
import { User } from "./user.dto";

@Resolver(() => User)
class UserResolver {
  @Query()
  user() {
    return {
      id: "1",
      username: "test",
      email: "",
    };
  }
}

export default UserResolver;

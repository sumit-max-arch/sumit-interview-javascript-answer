// level {2}
async function getUsers() {
let data = await Promise.all([
 response_fetch.getUser().then((res) => {
    data.res.write(res);
  }),
 response_fetch.getProfile().then((res) => {
    data.res.write(res);
  }),
 response_fetch.getPosts().then((res) => {
    data.res.write(res);
  }),
]);

const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}

import PocketBase from 'pocketbase';
export const pb = new PocketBase(process.env.POCKETBASE_URL);

export const getUserRecords = function() {
  pb.collection('Users_Data').getFullList({
    sort: '-created',
  }).then((value)=>{
    // console.log(value);
    return value;
  });
}
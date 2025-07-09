const headerFetch = { "Content-Type": "application/json" };
export const appJson_Authtion = token => ({ "Content-Type": "application/json", "Authorization": `Bearer ${token}` });
export default headerFetch;
// export const appJson_Author = token => ({ "Content-Type": "application/json", Authorization: `Bearer ${token}` });
// export const Author = token => ({ Authorization: `Bearer ${token}` });
// export const Authtion = token => ({ "Authorization": `Bearer ${token}` });
export default function(server) {
  server.createList('user', 10);
  server.createList('post', 100);
  server.createList('album', 100);
}

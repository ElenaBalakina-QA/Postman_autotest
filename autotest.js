// autotest for method https://api.pokemonbattle.me:9104/pokemons


pm.test("Создание покемона без имени, проверка по значению", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Покемон создан");
});

pm.test("Создание покемона без имени, проверка по статусу ответа", function () {
    pm.response.to.have.status(200);
});


//autotest for method https://rickandmortyapi.com/api/character?name=Cowboy Morty&status=alive&species&type&gender=


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});


//autotest for method https://rickandmortyapi.com/api/location?name&type=Space station&dimension


pm.test("Ожидаю 7 локаций", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.info.count).to.eql(7);
});

pm.test("Ожидаю, что ответ придёт быстрее 400 ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});


//autotest for method https://rickandmortyapi.com/api/episode/[5,7,12,1]


pm.test("Ожидаю хедер Content-Type", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Ожидаю успешный ответ", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});


//autotest for method https://swapi.py4e.com/api/people/10/


pm.test("Ожидаю пол персонажа: мужчина", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gender).to.eql("male");
});


//autotest for method https://swapi.py4e.com/api/planets/7/


pm.test("Ожидаю в теле ответа формат данных json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});


//autotest for method https://swapi.py4e.com/api/starships/5/

pm.test("Ожидаю ответ успешный", () => {
    pm.expect(pm.response.code).to.be.oneOf([200,201,202,203,204]);
  });

  pm.test("Поверяю наличие куки в ответе", () => {
    pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
  });
  
  const jsonData = pm.response.json();
  pm.test("Ожидаю тип данных число для ключа 'экипаж'", () => {
    pm.expect(jsonData.crew).to.be.a("number");
  });
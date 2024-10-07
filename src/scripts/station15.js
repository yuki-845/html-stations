async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return result
}

function test(userList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fullNames = buildFullName(userList); // buildFullName を呼び出し、結果を取得
      resolve(fullNames); // resolve でフルネームの配列を返す
    }, 3000);
  });
}

function buildFullName(data) {
  // 各ユーザーオブジェクトに対してフルネームを追加
  return data.map(person => ({
    id: person.id,
    full_name: `${person.family_name} ${person.first_name}`, // 半角スペースで結合
    first_name: person.first_name,
    family_name: person.family_name,
    affiliation: person.affiliation,
    is_student: person.is_student
  }));
}
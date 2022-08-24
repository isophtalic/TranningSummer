// configure pretiter eslint, typescript

function ptBac2(a: number, b: number, c: number): void {
    var nghiem: string = '';

    if (a == 0) {
        if (b == 0) {
            nghiem += 'pt vo nghiem : ';
        } else {
            nghiem += -c / b;
        }
    } else {
        const delta: number = b * b - 4 * a * c;
        if (delta == 0) {
            nghiem += 'Nghiem kep : ' + -b / (2 * a);
        } else if (delta > 0) {
            nghiem += 'x1 = ' + (-b - Math.sqrt(delta)) / (2 * a) + ' x2 = ' + (-b + Math.sqrt(delta)) / (2 * a);
        } else nghiem += 'vo nghiem';
    }

    console.log(nghiem);
}
ptBac2(null, 2, 1);
ptBac2(1, undefined, 1);
ptBac2(1, 4, -3);
ptBac2("1", 2, 1);
export { }
// khởi tạo project ts
// run for 4 test case : vô nghiệm, 1 nghiệm, 2 nghiệm, truyền vào null, truyền vào undefined, truyền sai datatype;
// can create a new project ReactJs

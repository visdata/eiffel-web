var str='M41.08164179104483,302.4C43.678231395542014,307.7846857291704,46.27482100003919,313.1693714583408,48.87141060453637,313.1693714583408C49.20474393786971,313.1693714583408,49.538077271203036,313.1693714583408,49.87141060453637,313.1693714583408C58.23100768625882,313.1693714583408,66.59060476798126,337.43976747453956,74.95020184970372,349.2233541666991C83.02517284222147,360.6057353744069,91.1001438347392,382.71434634472195,99.17511482725695,382.71434634472195C99.50844816059028,382.71434634472195,99.84178149392362,382.71434634472195,100.17511482725695,382.71434634472195C109.27542867925101,382.71434634472195,118.37574253124507,342.360373892397,127.47605638323913,340.5042414171221C144.98467456108426,336.9331211980139,162.4932927389294,337.07257695634183,180.00191091677453,335.14756108845984C197.51052909461967,333.22254522057784,215.01914727246478,330.8198318600074,232.52776545030991,328.95414620983C253.8895177126435,326.67787778854984,275.2512699749771,325.0115953216645,296.6130222373107,323.0130629844527C303.86170497201624,322.3349010682581,311.1103877067217,320.97230025533116,318.35907044142726,320.97230025533116C318.6924037747606,320.97230025533116,319.02573710809395,320.97230025533116,319.35907044142726,320.97230025533116C365.7941962146828,320.97230025533116,412.2293219879384,259.4534228549383,458.66444776119397,197.93454545454546';
var reg=new RegExp('127.47605638323913,343.2110302810014(.*)296.6130222373107,325.172287336565')
console.log(reg.exec(str))
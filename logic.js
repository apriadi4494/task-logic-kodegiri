const array = ['11','12','cii','001','2','1998','7','89','iia','fii'];
const allResult = new Set();

array.forEach(item => {
    if (isNaN(Number(item))) {
        const result = new Set();
        
        for (let i = 0; i < item.length; i++) {
            for (let j = i + 1; j <= item.length; j++) {
                const sliceText = `"${item.slice(i, j)}"`;
                result.add(sliceText);
                allResult.add(sliceText);
            }
        }

        console.log(item, '=', `{${new Array(...result).join(',')}}`);
    }
})

console.log('S', '=', `{${new Array(...allResult).join(',')}}`);


// RESULT
// cii = {"c","ci","cii","i","ii"}
// iia = {"i","ii","iia","ia","a"}
// fii = {"f","fi","fii","i","ii"}
// S = {"c","ci","cii","i","ii","iia","ia","a","f","fi","fii"}
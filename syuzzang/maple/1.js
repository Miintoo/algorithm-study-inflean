

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    const lines = input.trim().split("\n");
    const N = parseInt(lines[0]);
    const M = lines[1];
    const Q = parseInt(lines[2]);
    const queries = lines.slice(3).map(line => line.split(" ").map(Number));

    const result = solve(N, M, queries);
    console.log(result.join("\n"));
});

function solve(N, M, queries) {
    const beadRegex = /[^*]+/g;
    const matches = [...M.matchAll(beadRegex)];

    const beads = [];
    const beadPos = [];
    const prefixSum = [];

    let sum = 0;
    for (const match of matches) {
        const str = match[0];
        const start = match.index;
        const end = start + str.length - 1;

        beads.push({ start, end, length: str.length });
        beadPos.push(start);
        sum += str.length;
        prefixSum.push(sum);
    }

    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) left = mid + 1;
            else right = mid;
        }
        return left;
    }

    function upperBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) left = mid + 1;
            else right = mid;
        }
        return left;
    }

    const results = [];

    for (const [s, e] of queries) {
        const left = lowerBound(beadPos, s);
        const right = upperBound(beadPos, e) - 1;

        let total = 0;

        for (let i = left; i <= right; i++) {
            const b = beads[i];
            const leftTied = (i === 0) || (M[b.start - 1] === '*');
            const rightTied = (i === beads.length - 1) || (M[b.end + 1] === '*');

            if (b.start >= s && b.end <= e && leftTied && rightTied) {
                total += b.length;
            }
        }

        results.push(total);
    }

    return results;
}
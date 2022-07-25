export const BubblesortStrategy = {
    execute: async (bars = [], setBars = () => { }) => {
        for (let i = 0; i < bars.length - 1; i++) {
            for (let j = i + 1; j < bars.length; j++) {
                if (bars[i] > bars[j]) {
                    const temp = bars[j];
                    bars[j] = bars[i];
                    bars[i] = temp;
                    await updateArray([...bars], setBars);
                }
            }
        }
    }
}
function updateArray(bars, setBars) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log('updata!:', bars);
            setBars(bars);
            resolve();
        }, 500);
    });
}
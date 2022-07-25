export const BubblesortStrategy = {
    execute: async (bars = [], setBars = () => { }) => {
        for (let i = 0; i < bars.length - 1; i++) {
            for (let j = i + 1; j < bars.length; j++) {
                if (bars[i].height > bars[j].height) {
                    const temp = bars[j];
                    bars[j] = bars[i];
                    bars[i] = temp;
                    await updateArray([...bars], setBars, bars[i], bars[j]);
                }
            }
        }
    }
}
function updateArray(bars, setBars, bar1, bar2) {
    return new Promise((resolve) => {
        bar1.class = `bar selected`;
        bar2.class = `bar selected`;
        setTimeout(() => {
            setBars(bars);
            bar1.class = `bar`;
            bar2.class = `bar`;
            resolve();
        }, 500);
    });
}
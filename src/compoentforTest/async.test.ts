import { fetchData, fetchDataWithCallback, fetchDataWithError } from "./async";

// test('the data is peanut butter', () => {
//    fetchData().then(data=>{
//     expect(data).toMath(/butter/)
//    })
// });


// test('the data is peanut butter', async () => {
//     const data = await fetchData()
//     expect(data).toBe('peanut butter')
// })


// test('the fetch fails with an error', async () => {
//     expect.assertions(1)
//     try {
//         await fetchDataWithError()
//     } catch (error) {
//         expect(error).toMatch('error')
//     }
// })





// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter')
// })


test('the fetch fails with an error', async () => {
    // expect.assertions(1)
    await expect(fetchDataWithError()).rejects.toMatch('error')
})

test('the fetch fails with an error', () => {
    expect.assertions(1)
    return fetchDataWithError().catch(error => {
        expect(error).toMatch('error')
    })
})


//fetchDataWithCallback


test('the data is peanut butter', done => {
    function callbak(error: string | null, data: string) {
        if (error) {
            // expect(error).toMatch(/error/)
            done(error)
            return;
        }
        try {
            expect(data).toBe('peanut butter')
            done();
        } catch (error) {
            done(error)
        }
    }
    fetchDataWithCallback(callbak)
})

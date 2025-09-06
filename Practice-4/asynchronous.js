console.log("Start making breakfast");

// Async boiling water
function boilWaterAsync() {
  console.log("Kettle on... waiting ⏳");
  setTimeout(() => {
    console.log("Water boiled ✅");
    console.log("Make tea with boiled water ☕");
  }, 3000); // 3 seconds delay
}

boilWaterAsync();
console.log("Meanwhile... toasting bread 🍞");
console.log("Spread butter and jam 🧈🍓");

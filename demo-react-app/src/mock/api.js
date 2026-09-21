export const mockHome = (opts) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        if(opts && opts.shouldFail) {
          reject(new Error("Failed to fetch home data"));
          return;
        }
        resolve({
            // this is all the data that the Home view requires for its widgets
            user: { firstName: "Tim", lastName: "Shepherd", isManager: true },
            metrics: {
                TotalModulesTaken: 12,
                TotalHoursTrained: 26,
                PlanCategoryProgress: [
                    { PlanCategory: "compliance",   PlanCategoryProgressPercent: 60 },
                    { PlanCategory: "trainingPlan", PlanCategoryProgressPercent: 40 }
                ]
            },
            parentTags: ["Compliance", "Leadership", "Safety"],
            whatsHotModules: [
                {
                    ModuleId: 1,
                    ModuleName: "Introduction to Compliance",
                    ModuleThumbnailUrl: "https://via.placeholder.com/150",
                    ModuleType: "modCourse",
                    ModuleTypeDisplay: "Course",
                    ModuleLikeCount: 10,
                    EventType: "",
                    EventTypeDisplay: "",
                    ModuleDuration: "1h 30m",
                },
                {
                    ModuleId: 2,
                    ModuleName: "Leadership Essentials",
                    ModuleThumbnailUrl: "https://via.placeholder.com/150",
                    ModuleType: "modCourse",
                    ModuleTypeDisplay: "Course",
                    ModuleLikeCount: 5,
                    EventType: "",
                    EventTypeDisplay: "",
                    ModuleDuration: "2h 15m",
                }
            ]
        });
    }, 400); // pretend network latency
});
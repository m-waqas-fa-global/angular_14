## 🧠 Simple Rule:
`headless: false` →  visible automation (for testing)
`headless: true`  →  invisible background automation (real usage)

## What is CRON Jobs:
   CRON expressions are used to define the schedule on which a task should run. A CRON expression consists of five fields, each representing a different unit of time:

   - A simple task that logs a message to the console every minute.
   - A task that runs every day at 10 PM to back up a database.
   - A task that sends a reminder email to users every Monday at 9 AM.

    [argumentsType]

    * * * * *
    ┬ ┬ ┬ ┬ ┬
    │ │ │ │ │
    │ │ │ │ └───── Day of the week (0 - 7) (Sunday is 0 or 7)
    │ │ │ └────────── Month (1 - 12)
    │ │ └─────────────── Day of the month (1 - 31)
    │ └──────────────────── Hour (0 - 23)
    └───────────────────────── Minute (0 - 59)

  ` 0 or 7: Sunday1: Monday2: Tuesday3: Wednesday4: Thursday5: Friday6: Saturday`
-- CreateTable
CREATE TABLE "Resources" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "parentIndex" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "resourceId" TEXT,
    "resizable" BOOLEAN DEFAULT true,
    "draggable" BOOLEAN DEFAULT true,
    "cls" TEXT,
    "duration" REAL,
    "durationUnit" TEXT,
    "parentIndex" INTEGER,
    "orderedParentIndex" INTEGER,
    "exceptionDates" TEXT,
    "readOnly" BOOLEAN DEFAULT false,
    "allDay" BOOLEAN DEFAULT false,
    "recurrenceCombo" TEXT DEFAULT 'none',
    CONSTRAINT "Events_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resources" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

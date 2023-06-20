let lessonColumns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "course.name",
        header: "Course",
    },
    {
        accessorKey: "batch.name",
        header: "Batch",
        size: 50,
    },
    {
        accessorKey: "week.name",
        header: "Week",
        size: 50,
    },
    {
        accessorKey: "created",
        header: "Uploaded Date",
    }
];
export default lessonColumns;
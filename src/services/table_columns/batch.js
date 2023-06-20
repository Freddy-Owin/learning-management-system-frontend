let batchColums = [
    {
        accessorKey: "name",
        header: "Batch",
        size: 100,
    },
    {
        accessorFn: (row) => row.instructors.map(person => person.name),
        header: "Instructor",
        size: 100,
    },
    {
        accessorKey: "date",
        header: "Class Date",
        size: 100,
    },
    {
        accessorKey: "start_time",
        header: "Start Time",
        size: 50,
    },
    {
        accessorKey: "end_time",
        header: "End Time",
        size: 50,
    },
    {
        accessorFn: (row) => row.status == true?"active":"finished",
        header: "Status",
        size: 100,
    }
];
export default batchColums;
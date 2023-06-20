const coursesColumns = [
{
    accessorKey: 'name',
    header: 'Course Name',
},
{
    accessorKey: 'fee',
    header: 'Fee',
},
{
    accessorKey: 'status',
    header: 'Course Status',
},
{
    accessorFn: (row) => row.available == true? "open" : "temporary closed",
    header: 'Available',
}];

export default coursesColumns;
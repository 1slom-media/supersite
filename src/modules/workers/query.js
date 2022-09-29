const GETWORKERS = `
    select
        w.*
    from Workers as w
    where case when $1 > 0 then w.id = $1 else true end
`;

const POSTWORKERS =`
insert into Workers (imageAvatar, WorkerName, WorkerPosition)
values ($1, $2, $3) returning *
`;

const PUTWORKERS = `
    with old_Workers as (
        select
            id,
            imageAvatar,
            WorkerName, 
            WorkerPosition
        from Workers
        where id = $1    
    ) update Workers as w 
        set
            imageAvatar = 
                case 
                    when length($2) > 1 then $2
                    else o.imageAvatar
                end,
            WorkerName = 
                case 
                    when length($3) > 1 then $3
                else o.WorkerName
            end ,
            WorkerPosition = 
                case 
                    when length($4) > 1 then $4
                else o.WorkerPosition
            end 
    from old_Workers as o   
    where w.id = $1
    returning w.*                 
`;

const DELETEWORKERS =`
delete from Workers
where id=$1 returning *
`;

export {
    GETWORKERS,
    POSTWORKERS,
    PUTWORKERS,
    DELETEWORKERS
}
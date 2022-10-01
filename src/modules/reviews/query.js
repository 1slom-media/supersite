const GETREVIEWS = `
    select
        r.*
    from Reviews as r
    where case when $1 > 0 then r.id = $1 else true end
`;

const POSTREVIEWS =`
insert into Reviews (title,video)
values ($1, $2) returning *
`;

const PUTREVIEWS = `
    with old_Reviews as (
        select
            id,
            title,
            video
        from Reviews
        where id = $1    
    ) update Reviews as r 
        set
            title = 
                case 
                    when length($2) > 1 then $2
                    else o.title
                end,
            video = 
                case 
                    when length($3) > 1 then $3
                else o.video
            end 
    from old_Reviews as o   
    where r.id = $1
    returning r.*                 
`;

const DELETEREVIEWS =`
delete from Reviews
where id=$1 returning *
`;

export {
    GETREVIEWS,
    POSTREVIEWS,
    PUTREVIEWS,
    DELETEREVIEWS
}
const GETSITES = `
    select
        s.*
    from sites as s
    where case when $1 > 0 then s.id = $1 else true end
`;

const POSTSITES =`
insert into sites (title,link, Background)
values ($1, $2, $3) returning *
`;

const PUTSITES = `
    with old_sites as (
        select
            id,
            title,
            link,
            Background
        from sites
        where id = $1    
    ) update sites as s 
        set
            title = 
                case 
                    when length($2) > 1 then $2
                    else o.title
                end,
            link = 
                case 
                    when length($3) > 1 then $3
                else o.link
            end ,
            Background = 
                case 
                    when length($4) > 1 then $4
                else o.Background
            end 
    from old_sites as o   
    where s.id = $1
    returning s.*                 
`;

const DELETESITES =`
delete from sites
where id=$1 returning *
`;

export {
    GETSITES,
    POSTSITES,
    PUTSITES,
    DELETESITES
}
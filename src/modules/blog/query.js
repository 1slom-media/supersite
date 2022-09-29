const GETBLOG = `
    select
        b.*
    from Blog as b
    where case when $1 > 0 then b.id = $1 else true end
`;

const POSTBLOG =`
insert into Blog (TitleRu,DescriptionRu,TitleEn,DescriptionEn,TitleUz,DescriptionUz)
values ($1, $2, $3,$4,$5,$6) returning *
`;

const PUTBLOG = `
    with old_Blog as (
        select
            id,
            TitleRu,
            DescriptionRu,
            TitleEn,
            DescriptionEn,
            TitleUz,
            DescriptionUz
        from Blog
        where id = $1    
    ) update Blog as b 
        set
            TitleRu = 
                case 
                    when length($2) > 1 then $2
                    else o.TitleRu
                end,
            DescriptionRu = 
                case 
                    when length($3) > 1 then $3
                else o.DescriptionRu
            end ,
            TitleEn = 
                case 
                    when length($4) > 1 then $4
                else o.TitleEn
            end,
            DescriptionEn = 
                case 
                    when length($5) > 1 then $5
                else o.DescriptionEn
            end,
            TitleUz = 
                case 
                    when length($6) > 1 then $6
                else o.TitleUz
            end,
            DescriptionUz = 
                case 
                    when length($7) > 1 then $7
                else o.DescriptionUz
            end
    from old_Blog as o   
    where b.id = $1
    returning b.*                 
`;

const DELETEBLOG =`
delete from Blog
where id=$1 returning *
`;

export {
    GETBLOG,
    POSTBLOG,
    PUTBLOG,
    DELETEBLOG
}
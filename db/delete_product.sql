delete from products
where id = $1;

select * from products
order by id asc;